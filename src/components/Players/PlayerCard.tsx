import type { Player } from '../../types/playerType';

const FlagIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path d="M14.4 6H20a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.6a1 1 0 0 1-.8-.4L10 15.5l-2.6 2.1a1 1 0 0 1-1.5-.8V7a1 1 0 0 1 1-1H8.8A1 1 0 0 1 9.6 6l4.8 0Z" />
    </svg>
);

const UserIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
    </svg>
);

type Props = {
    player: Player;
    isSelected: boolean;
    onChoose: (player: Player) => void;
};

const PlayerCard = ({ player, isSelected, onChoose }: Props) => {
    return (
        <div className="rounded-2xl border border-gray-200 p-5">
            <img
                className="h-52 w-full rounded-2xl object-cover"
                src={player.playerImage}
                alt={player.playerName}
            />

            <div className="mt-5 flex items-center gap-3">
                <UserIcon />
                <h3 className="text-lg font-semibold">{player.playerName}</h3>
            </div>

            <div className="mt-3 flex items-center justify-between border-b border-gray-200 pb-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                    <FlagIcon /> {player.origin}
                </span>
                <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-black">
                    {player.playerType}
                </span>
            </div>

            <p className="mt-4 text-sm font-bold">Rating</p>

            <div className="mt-3 flex items-center justify-between text-sm">
                <span className="font-semibold">{player.battingStyle}</span>
                <span className="text-gray-500">{player.bowlingStyle}</span>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm">
                <span className="font-bold">Price: ${player.price}</span>
                <button
                    onClick={() => onChoose(player)}
                    disabled={isSelected}
                    className="cursor-pointer rounded-lg border border-gray-200 px-4 py-2 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
>
                    {isSelected ? "Selected" : "Choose Player"}
                </button>
            </div>
        </div>
    );
};

export default PlayerCard;