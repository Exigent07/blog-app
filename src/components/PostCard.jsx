import Button from "./Button";

export default function PostCard() {
    return (
        <div className="w-[275px] text-grayLight h-[475px] border border-grayLight pt-4 flex flex-col items-center justify-between">
            <div className="w-[240px] h-[200px] border-x border-t border-grayLight flex items-center justify-center">
                <p className="text-white font-bold">Image</p>
            </div>
            <div className="h-[45px] w-full border border-grayLight">

            </div>
            <p className="text-center font-display text-[28px] text-grayLight leading-none">
                This is where I bring together my interest for solving puzzles and sharing ideas.
            </p>
            <Button value="Read Post" height={"45px"} width={"275px"} size={"25px"}></Button>
        </div>
    );
}