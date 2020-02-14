CREATE TABLE transact
(
  -- serial increments
  -- priamery key = int and must be unique
  t_id SERIAL PRIMARY KEY,
  t_date date,
  t_amount real -- 32 decimals 

)

INSERT INTO transact (t_date, t_amount) VALUES 
('2020-02-10', 560.54),
('2020-02-10',-4.87),
('2020-02-11',-3.08),
('2020-02-11',-10.58),
('2020-02-11',-3.19),
('2020-02-11',-9.66),
('2020-02-12',-0.55),
('2020-02-12',-9.51),
('2020-02-12',-23.63),
('2020-02-13',-2.61)