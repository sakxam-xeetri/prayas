# ⚡ FASTEST & EASIEST SETUP GUIDE (3-MINUTE EXPRESS)

Follow these 3 quick steps to connect your **Supabase Database** and host on **GitHub Pages** for free.

---

## 🚀 Step 1: Create Supabase Project (1 Min)

1. Open [https://supabase.com](https://supabase.com) and click **Sign in with GitHub**.
2. Click **New Project** ➔ Name it `prayas-bom` ➔ Set a password ➔ Click **Create new project**.
3. Go to **Project Settings (⚙️ icon)** ➔ **API** and copy your **2 keys**:
   - 📌 **Project URL** (`https://...supabase.co`)
   - 📌 **anon / public key** (`eyJhbGci...`)

---

## 📜 Step 2: Run 1-Click Database Setup (1 Min)

1. In Supabase sidebar, click **SQL Editor** ➔ **New Query**.
2. Copy and paste this single script, then click **Run**:

```sql
-- Create Tables
CREATE TABLE IF NOT EXISTS public.bom_items (
    id TEXT PRIMARY KEY,
    node TEXT NOT NULL,
    name TEXT NOT NULL,
    spec TEXT,
    qty INTEGER DEFAULT 1,
    unit_price NUMERIC DEFAULT 0,
    status TEXT DEFAULT 'In Stock'
);

CREATE TABLE IF NOT EXISTS public.project_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
);

-- Enable RLS & Allow Access
ALTER TABLE public.bom_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public bom_items" ON public.bom_items FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public settings" ON public.project_settings FOR ALL USING (true) WITH CHECK (true);

-- Enable Live Realtime Sync
ALTER PUBLICATION supabase_realtime ADD TABLE public.bom_items, public.project_settings;
```

3. Open your BOM Web App ➔ Click **`⚡ CLOUD SYNC`** ➔ Paste your **URL** & **Key** ➔ Click **Connect & Sync**!

---

## 🌐 Step 3: Publish to GitHub Pages (1 Min)

1. Go to [https://github.com/new](https://github.com/new) and create a repository named `prayas-bom`.
2. Upload your project files (`index.html`, `css/`, `js/`).
3. In your repo: Go to **Settings** ➔ **Pages** ➔ Set Branch to `main` ➔ Click **Save**.

🎉 **Done!** Your live site is now online with real-time multi-device database sync.
