import style from "@/styles/skeleton.module.css";

export default function CategoryLoading() {
    return (
        <div className="grid grid-cols-4 gap-5">
            {[...new Array(8)].map((_, index) => (
                <div key={index} className="h-[500px] w-[300px] rounded-sm overflow-hidden">
                    <div className={`${style.skeleton} h-3/5 w-full`}></div>
                    <div className="h-2/5 flex flex-col items-start justify-end space-y-2">
                        <div className="space-y-1.5">
                            <h4 className={`${style.skeleton} h-3 w-full mb-3`}></h4>
                            <p className={`${style.skeleton} h-3 w-full mb-3`}></p>
                        </div>
                        <p className={`${style.skeleton} h-3 w-2/5`}></p>
                    </div>
                </div>
            ))}
        </div>
    );
}
