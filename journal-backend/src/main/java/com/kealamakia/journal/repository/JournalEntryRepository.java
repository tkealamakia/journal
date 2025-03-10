package com.kealamakia.journal.repository;

import com.kealamakia.journal.model.JournalEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JournalEntryRepository extends JpaRepository<JournalEntry, Long> {

  @Query("SELECT j FROM JournalEntry j ORDER BY j.createdAt DESC")
  List<JournalEntry> findAllByOrderByCreatedAtDesc();

}