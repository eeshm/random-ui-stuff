import { cn } from "../lib/utils";


const RotatingGrid = () => {
    return (
        <div className="absolute flex items-center justify-center w-full h-full inset-x-0 p-2">
            <Circle className="flex items-center justify-center border-neutral-200 shadow-xs">
                <Icon />
            </Circle>
            <Circle className="border-neutral-300 shadow-sm size-60 bg-neutral-300 z-9" />
            <Circle className="border-neutral-400 shadow-sm size-88 bg-neutral-300 z-9" />
        </div>
    )
}



export default RotatingGrid;

const Circle = ({className, children} : {className :string, children ?: React.ReactNode}) => {
    return (
        <div className={cn("border border-transparent bg-white size-40  z-10 rounded-full m-auto", 
            className,
            "absolute "
            )}>
                {children}
        </div>
    )
}

const Icon = () => {
    return (
        <div className="font-serif font-bold bg-gray-100 py-1 px-2 rounded-full border border-gray-200">
            Cal.com
        </div>
    )
}
