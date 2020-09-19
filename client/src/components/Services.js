import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Every evening, hotels has free tastings at their hotel bar, where you can sample local wines, beers and spirits at no cost. Some Canopy hotels keep the free taps flowing for as long 6 hours, from 3pm – 9pm"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "The resort is hub to many hiking paths with access to nearby alpine lakes, mountain biking trails, river"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "The Free Broadway Shuttle offers fast connections from BART, San Francisco Bay Ferry, Amtrak, Amtrak San Joaquins and Capitol Corridor to downtown"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "The offer includes two local beers delivered to your hotel room; a flight of Vermont craft brews at the Tavern (pictured); and a free map showing"
            }

        ]

    };
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
