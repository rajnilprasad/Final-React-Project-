// Functional component
import React from "react";
import RoomFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomContainer() {
    return (
        <RoomConsumer>
            {/* function to access the value that we are passing in context.js (this.context) */}
            {value => {
                const { loading, sortedRooms, rooms } = value
                if ( loading ) {
                    return <Loading />
                }
                return (
                    <div>
                        Search Rooms
                        <RoomFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms} />
                    </div>
                );
            }}
        </RoomConsumer>
    );
}

