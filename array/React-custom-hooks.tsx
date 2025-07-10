// 📁 src/hooks/useForm.ts
import { useState } from 'react';

export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return { values, handleChange, setValues };
}

// 📁 src/hooks/useFetch.ts
import { useEffect, useState } from 'react';

export function useFetch<T = unknown>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
}

// 📁 src/hooks/useToggle.ts
import { useState } from 'react';

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((v) => !v);
  return { value, toggle };
}

// 📁 src/hooks/useDebounce.ts
import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}

// 📁 src/hooks/usePrevious.ts
import { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// 📁 src/hooks/useLocalStorage.ts
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

// More hooks like useClickOutside, useAuth, useMediaQuery, etc. can be added similarly...

// Usage Example 📁 src/App.tsx
import React from 'react';
import { useForm } from './hooks/useForm';

function App() {
  const { values, handleChange } = useForm({ name: '', email: '' });

  return (
    <div className="p-4">
      <input name="name" value={values.name} onChange={handleChange} placeholder="Name" className="border p-2 mb-2 block" />
      <input name="email" value={values.email} onChange={handleChange} placeholder="Email" className="border p-2 block" />
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}

export default App;
