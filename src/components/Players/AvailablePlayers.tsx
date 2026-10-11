import type { Player } from "../../types/playerType";
import PlayerCard from "./PlayerCard";

type Props = {
    players: Player[];
    selectedPlayers: Player[];
    onChoose: (player: Player) => void;
};

const AvailablePlayers = ({ players, selectedPlayers, onChoose }: Props) => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {players.map((player) => (
                <PlayerCard
                    key={player.id}
                    player={player}
                    isSelected={selectedPlayers.some((p) => p.id === player.id)}
                    onChoose={onChoose}
                />
            ))}
        </div>
    );
};

export default AvailablePlayers;