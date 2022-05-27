package com.example.demo.service;

import com.example.demo.model.Room;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

public interface RoomService extends CrudRepository<Room, Long> {
}
