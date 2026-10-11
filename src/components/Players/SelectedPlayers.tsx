import type { Player } from "../../types/playerType";

type Props = {
    players: Player[];
    onRemove: (id: number) => void;
    onAddMore: () => void;
};

const SelectedPlayers = ({ players, onRemove, onAddMore }: Props) => {
    return (
        <div>
            {players.length === 0 && (
                <p className="py-10 text-center text-gray-500">No player selected yet.</p>
            )}

            <div className="space-y-4">
                {players.map((player) => (
                    <div
                        key={player.id}
                        className="flex items-center justify-between rounded-2xl border border-gray-200 p-4"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={player.playerImage}
                                alt={player.playerName}
                                className="h-16 w-16 rounded-xl object-cover"
                            />
                            <div>
                                <h3 className="font-semibold">{player.playerName}</h3>
                                <p className="text-sm text-gray-500">{player.battingStyle}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => onRemove(player.id)}
                            className="cursor-pointer rounded-lg border border-red-200 px-3 py-2 text-sm text-red-500 hover:bg-red-50"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <button
                onClick={onAddMore}
                className="mt-6 cursor-pointer rounded-xl bg-[#E7FE29] px-5 py-3 font-bold"
            >
                Add More Players
            </button>
        </div>
    );
};

export default SelectedPlayers;