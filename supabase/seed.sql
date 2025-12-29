-- Seed data for Data Union Platform
-- Run this AFTER schema.sql

-- 1. Pre-seed Platform-Managed Datasets
-- These are managed by the platform and accept individual contributions
INSERT INTO datasets (name, description, data_type, domain, quality_score, price_per_license, total_contributions, contributor_count) VALUES
('Urban Mobility Dataset', 'GPS coordinates, timestamps, and speed data from urban commuters for traffic prediction and route optimization', 'sensor', 'Transportation', 90.0, 5000.00, 25000, 450),
('Social Sentiment Dataset', 'Text posts, comments, and reactions for sentiment analysis and social trends', 'text', 'Social Media', 88.0, 3500.00, 50000, 1200),
('Medical Imaging Dataset', 'Anonymized medical scans (X-rays, MRIs, CT scans) for diagnostic AI training', 'image', 'Healthcare', 95.0, 8000.00, 10000, 180),
('IoT Smart Home Dataset', 'Temperature, humidity, and energy consumption readings from smart home devices', 'sensor', 'IoT', 87.0, 4500.00, 100000, 2500);

-- 2. Insert Sample Companies
INSERT INTO companies (name, industry, total_spend) VALUES
('AgriTech AI Solutions', 'Agricultural Technology', 0),
('MediVision Labs', 'Healthcare AI', 0),
('SecureBank Analytics', 'Financial Services', 0),
('SmartCity Systems', 'Urban Planning', 0);

-- That's it! Contributors and their data samples will be created when users interact with the app
