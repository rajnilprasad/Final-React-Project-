import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, feturedRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="fetured-rooms">
        <Title title="fetured rooms" />
        <div className="fetured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}