package com.kealamakia.journal.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "journal_entry")
public class JournalEntry {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String title;
  private String content;
  private LocalDateTime createdAt;

  public JournalEntry() {
    this.createdAt = LocalDateTime.now();
  }

  // Getters and setters
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }
}