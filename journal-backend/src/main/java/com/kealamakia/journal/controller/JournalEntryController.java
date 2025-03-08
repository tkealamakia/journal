package com.kealamakia.journal.controller;

import com.kealamakia.journal.dto.JournalEntryRequest;
import com.kealamakia.journal.model.JournalEntry;
import com.kealamakia.journal.service.JournalEntryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/entries")
@CrossOrigin(origins = "http://localhost:5173")
public class JournalEntryController {
  private final JournalEntryService service;

  public JournalEntryController(JournalEntryService service) {
    this.service = service;
  }

  @PostMapping
  public ResponseEntity<JournalEntry> createEntry(@RequestBody JournalEntryRequest request) {
    return ResponseEntity.ok(service.createEntry(request));
  }

  @GetMapping
  public ResponseEntity<List<JournalEntry>> getAllEntries() {
    return ResponseEntity.ok(service.getAllEntries());
  }

  @GetMapping("/{id}")
  public ResponseEntity<JournalEntry> getEntry(@PathVariable Long id) {
    return service.getEntry(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }
}