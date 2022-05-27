package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Room {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    private int roomNumber;
    private int size;
    private boolean seaView;

    public Room() {
    }

    public Room(long id, int roomNumber, int size, boolean seaView) {
        this.id = id;
        this.roomNumber = roomNumber;
        this.size = size;
        this.seaView = seaView;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public boolean isSeaView() {
        return seaView;
    }

    public void setSeaView(boolean seaView) {
        this.seaView = seaView;
    }
}
