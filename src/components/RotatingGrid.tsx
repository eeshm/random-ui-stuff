import { cn } from "../lib/utils";


const RotatingGrid = () => {
    return (
        <div className="absolute flex items-center justify-center w-full h-full inset-x-0 p-2">
            <Circle className="flex items-center justify-center border-neutral-200 shadow-xs">
                <Icon />
                <div className="size-8 absolute inset-0 rounded-lg bg-white flex items-center justify-center border border-transparent shadow-black/10 ring-1 ring-black/10 animate-orbit [--translate-position:120px]">
                    <Icon1 />
                </div>
                <div className="size-8 absolute inset-0 rounded-lg bg-white flex items-center justify-center border border-transparent shadow-black/10 ring-1 ring-black/10 animate-orbit [--translate-position:100px]">
                    <Icon1 />
                </div>
            </Circle>
            <Circle className="border-neutral-50 shadow size-60 bg-neutral-100/80 z-9 relative" >

            </Circle>
            <Circle className="border-neutral-50 shadow size-80 bg-neutral-100/60 z-8" />
            <Circle className="border-neutral-50 shadow size-100 bg-neutral-100/40 z-7" />
            <Circle className="border-neutral-50 shadow size-120 bg-neutral-100/20 z-6" />
        </div>
    )
}




export default RotatingGrid;

const Circle = ({ className, children }: { className: string, children?: React.ReactNode }) => {
    return (
        <div className={cn("border border-transparent bg-white size-40 z-10 rounded-full m-auto relative",
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

const Icon1 = () => {
    return (
        <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 18 18"><path d="M12.25,9c-.414,0-.75-.336-.75-.75v-3.25c0-1.378-1.122-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v3.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-3.25c0-2.206,1.794-4,4-4s4,1.794,4,4v3.25c0,.414-.336,.75-.75,.75Z" fill="rgba(75, 85, 99, 1)" data-color="color-2"></path><path d="M12.75,7.5H5.25c-1.517,0-2.75,1.233-2.75,2.75v4c0,1.517,1.233,2.75,2.75,2.75h7.5c1.517,0,2.75-1.233,2.75-2.75v-4c0-1.517-1.233-2.75-2.75-2.75Zm-3,5.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1Z" fill="rgba(115, 115, 119, 1)"></path></svg>
        </div>
    )
}
