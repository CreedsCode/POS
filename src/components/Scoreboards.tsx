import React from "react";
import styled from "styled-components";

const ScoreboardsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: -130px;
`;

const Scoreboard = styled.div`
    flex: 0 0 50%;
    padding: 10px;
`;

const ScoreboardTitle = styled.h3`
    text-align: center;
    font-size: 1.9rem;
`;

const ScoreboardEntry = styled.section``;

type Validator = {
    twitter: string;
    img_uri: string;
    signature: string;
};

export default function Scoreboards() {
    const validators: Validator[] = [
        {
            twitter: "spanish_vanish",
            img_uri:
                "https://pbs.twimg.com/profile_images/1578469517898010624/OYdYTlnn_400x400.png",
            signature: "Is burning them down an option?",
        },
        {
            twitter: "spanish_vanish",
            img_uri:
                "https://pbs.twimg.com/profile_images/1578469517898010624/OYdYTlnn_400x400.png",
            signature: "Let's de-silo labor markets!*",
        },
        {
            twitter: "spanish_vanish",
            img_uri:
                "https://pbs.twimg.com/profile_images/1578469517898010624/OYdYTlnn_400x400.png",
            signature:
                "Silos are not part of the movement, they will go down eventualy.*",
        },
    ];

    return (
        <ScoreboardsStyle>
            <Scoreboard>
                <ScoreboardTitle>Validators</ScoreboardTitle>
                {validators.map((validator) => (
                    <ScoreboardEntry>
                        <img src="/assets/img/avatar.png" />
                        <a>{validator.twitter}</a>
                        <p>{validator.signature}</p>
                    </ScoreboardEntry>
                ))}
            </Scoreboard>
            <Scoreboard>
                <ScoreboardTitle>Recent Proofs</ScoreboardTitle>
            </Scoreboard>
        </ScoreboardsStyle>
    );
}
