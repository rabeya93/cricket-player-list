import { use, useState } from "react";
import type { Player } from "../../types/playerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ playerPromise }: { playerPromise: Promise<Player[]> }) => {
    const players = use(playerPromise);

    const [activeTab, setActiveTab] = useState<"available" | "selected">("available");
    const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

    const handleChoose = (player: Player) => {
        const alreadySelected = selectedPlayers.some((p) => p.id === player.id);
        if (alreadySelected) return;
        setSelectedPlayers([...selectedPlayers, player]);
    };

    const handleRemove = (id: number) => {
        setSelectedPlayers(selectedPlayers.filter((p) => p.id !== id));
    };

    return (
        <section className="py-32">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-[35px] font-bold">
                    {activeTab === "available" ? "Available Players" : `Selected Player (${selectedPlayers.length})`}
                </h2>

                <div className="flex overflow-hidden rounded-xl border border-gray-200 text-sm">
                    <button
                        onClick={() => setActiveTab("available")}
                        className={`cursor-pointer px-5 py-3 ${activeTab === "available" ? "bg-[#E7FE29] font-bold" : "text-gray-500"}`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setActiveTab("selected")}
                        className={`cursor-pointer px-5 py-3 ${activeTab === "selected" ? "bg-[#E7FE29] font-bold" : "text-gray-500"}`}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            {activeTab === "available" ? (
                <AvailablePlayers
                    players={players}
                    selectedPlayers={selectedPlayers}
                    onChoose={handleChoose}
                />
            ) : (
                <SelectedPlayers
                    players={selectedPlayers}
                    onRemove={handleRemove}
                    onAddMore={() => setActiveTab("available")}
                />
            )}
        </section>
    );
};

export default Players;