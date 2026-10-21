'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  gamertag: string;
  name: string;
  email: string;
  role: 'founder' | 'admin' | 'player' | 'guest';
  points: number;
  rank: string;
  badge: string;
  registeredGame?: string;
  ticketCode?: string;
  claimedRewards: Array<{
    id: string;
    title: string;
    code: string;
    pointsSpent: number;
    claimedAt: string;
  }>;
}

const FOUNDER_PROFILE: UserProfile = {
  id: 'usr_founder_djjrip',
  gamertag: 'djjrip',
  name: 'Jayson Quindao',
  email: 'jquindao1@icloud.com',
  role: 'founder',
  points: 2500,
  rank: 'Grandmaster (DFW #1 Seed)',
  badge: 'GG LOOP FOUNDER',
  registeredGame: 'Valorant',
  ticketCode: 'GGLOOP-VAL-772910',
  claimedRewards: [
    {
      id: 'rew_heb_25',
      title: '$25 H-E-B Texas Grocery Card',
      code: 'HEB-TX-9842-7104',
      pointsSpent: 2500,
      claimedAt: '2026-10-18T18:30:00Z',
    },
  ],
};

const GUEST_PROFILE: UserProfile = {
  id: 'guest',
  gamertag: 'Guest Gamer',
  name: 'Guest Player',
  email: '',
  role: 'guest',
  points: 0,
  rank: 'Unranked',
  badge: 'Visitor',
  claimedRewards: [],
};

interface AuthContextType {
  user: UserProfile;
  isLoggedIn: boolean;
  isFounder: boolean;
  login: (gamertag: string, email: string, game?: string) => void;
  loginAsFounder: () => void;
  logout: () => void;
  addPoints: (amount: number, reason: string) => void;
  redeemReward: (rewardId: string, title: string, cost: number) => { success: boolean; code?: string; error?: string };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile>(FOUNDER_PROFILE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('ggloop_active_user');
      if (saved) {
        setUser(JSON.parse(saved));
      } else {
        // Default to Founder profile on Jayson's machine
        setUser(FOUNDER_PROFILE);
        localStorage.setItem('ggloop_active_user', JSON.stringify(FOUNDER_PROFILE));
      }
    } catch (e) {
      setUser(FOUNDER_PROFILE);
    }
  }, []);

  const saveUser = (u: UserProfile) => {
    setUser(u);
    try {
      localStorage.setItem('ggloop_active_user', JSON.stringify(u));
    } catch (e) {}
  };

  const login = (gamertag: string, email: string, game: string = 'Valorant') => {
    if (email.toLowerCase().includes('jquindao') || gamertag.toLowerCase() === 'djjrip') {
      saveUser(FOUNDER_PROFILE);
      return;
    }

    const newUser: UserProfile = {
      id: `usr_${Date.now()}`,
      gamertag: gamertag.trim(),
      name: gamertag.trim(),
      email: email.trim(),
      role: 'player',
      points: 500, // Starter bonus
      rank: 'Silver Division II',
      badge: 'Verified Competitor',
      registeredGame: game,
      ticketCode: `GGLOOP-${game.substring(0, 3).toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`,
      claimedRewards: [],
    };
    saveUser(newUser);
  };

  const loginAsFounder = () => {
    saveUser(FOUNDER_PROFILE);
  };

  const logout = () => {
    saveUser(GUEST_PROFILE);
  };

  const addPoints = (amount: number, reason: string) => {
    setUser((prev) => {
      const updated = { ...prev, points: prev.points + amount };
      try {
        localStorage.setItem('ggloop_active_user', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const redeemReward = (rewardId: string, title: string, cost: number) => {
    if (user.points < cost) {
      return { success: false, error: 'Insufficient GG Points balance.' };
    }
    const voucherCode = `GIFT-${rewardId.toUpperCase().slice(0, 4)}-${Math.floor(100000 + Math.random() * 900000)}`;
    const newClaim = {
      id: `claim_${Date.now()}`,
      title,
      code: voucherCode,
      pointsSpent: cost,
      claimedAt: new Date().toISOString(),
    };

    const updated: UserProfile = {
      ...user,
      points: user.points - cost,
      claimedRewards: [newClaim, ...(user.claimedRewards || [])],
    };

    saveUser(updated);
    return { success: true, code: voucherCode };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: user.role !== 'guest',
        isFounder: user.role === 'founder' || user.role === 'admin',
        login,
        loginAsFounder,
        logout,
        addPoints,
        redeemReward,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
