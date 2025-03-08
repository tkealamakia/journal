--liquibase formatted sql

--changeset tkealamakia:01
CREATE TABLE journal_entry (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL
);

--rollback DROP TABLE journal_entry;