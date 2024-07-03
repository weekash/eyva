export default function Header() {
    return (
        <>
        <div className="p-6 flex justify-between">
            <div className="flex items-center gap-2">
                <h3 className="font-medium text-lg">Team Members</h3>
                <p className="font-medium rounded-xl text-xs px-2 py-1 text-violet-600 bg-violet-50">100 users</p>
            </div>
            <button className="bg-violet-400 rounded-lg text-sm px-8 py-2 text-white">Delete Selected</button>
        </div>
        <div className="px-6 sm:grid grid-cols-12 gap-2 hidden">
            <p className="col-span-3 text-xs">Name</p>
            <p className="col-span-1 text-xs">Status</p>
            <p className="col-span-2 text-xs">Role</p>
            <p className="col-span-2 text-xs">Email Address</p>
            <p className="col-span-3 text-xs">Teams</p>
            <p className="col-span-1"></p>
        </div>
        </>
    )
}
