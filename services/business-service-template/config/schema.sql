-- script to be executed by service user on service start 
---------------------------------------------------------
CREATE TABLE IF NOT EXISTS contact(
    "id"            uuid DEFAULT uuid_generate_v4 () PRIMARY KEY, 
    "name"          VARCHAR(255), 
    "customerId"    INT REFERENCES customer (id), 
    "email"         citext,
    "phone"         TEXT, 
    "rank"          integer, 
    "createdBy"     uuid, 
    "updatedBy"     uuid, 
    "createdAt"     timestamptz default current_timestamp, 
    "updatedAt"     timestamptz);

CREATE UNIQUE INDEX IF NOT EXISTS "contact_email" 
    ON contact("email") 
    ;

CREATE OR REPLACE VIEW "customerWithContactCountView" as
    SELECT customer.*, count(contact.*) as "contactCount" from customer
        inner join contact on customer."id" =  contact."customerId" group by customer."id" order by customer."id";

