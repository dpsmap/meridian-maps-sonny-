-- Drop the existing permissive INSERT policy
DROP POLICY IF EXISTS "Users can create orders" ON public.orders;

-- Create a more secure INSERT policy that enforces user_id integrity
-- Guest orders: no auth required, but user_id must be NULL
-- Authenticated orders: user_id must match the authenticated user
CREATE POLICY "Users can create orders" ON public.orders
  FOR INSERT 
  WITH CHECK (
    -- Guest orders: unauthenticated, user_id must be NULL
    (auth.uid() IS NULL AND user_id IS NULL) OR
    -- Authenticated orders: user_id must match authenticated user
    (auth.uid() IS NOT NULL AND auth.uid() = user_id)
  );