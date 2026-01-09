-- Add admin role to user dm@dpsmap.com
INSERT INTO user_roles (user_id, role) 
VALUES ('8befe06b-75f1-4229-b083-06a5c6c92e7c', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;