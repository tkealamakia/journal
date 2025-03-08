package com.kealamakia.journal.service;

import com.kealamakia.journal.dto.JournalEntryRequest;
import com.kealamakia.journal.model.JournalEntry;
import com.kealamakia.journal.repository.JournalEntryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JournalEntryService {
  private final JournalEntryRepository repository;

  public JournalEntryService(JournalEntryRepository repository) {
    this.repository = repository;
  }

  public JournalEntry createEntry(JournalEntryRequest request) {
    JournalEntry entry = new JournalEntry();
    entry.setTitle(request.getTitle());
    entry.setContent(request.getContent());
    return repository.save(entry);
  }

  public List<JournalEntry> getAllEntries() {
    return repository.findAll();
  }

  public Optional<JournalEntry> getEntry(Long id) {
    return repository.findById(id);
  }
}