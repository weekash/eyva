import  EditIcon  from "../../assets/svgs/edit.svg?react"
import  DeleteIcon from "../../assets/svgs/bin.svg?react"

interface TeamListItemProps{
  setSelection:(val:any)=>void
  setMode:(val:string)=>void
}
export default function TeamListItem({setSelection, setMode}:TeamListItemProps) {

  function selectItem(item:any, mode:string){
    setSelection(item)
    setMode(mode)
  }
  const conditionalClass: Record<string, { text: string, background: string, dot: string }> = {
    "active": {
      background: "bg-green-100",
      text: "text-green-600",
      dot: "bg-green-600"
    }
  }

  const colorPallet: Array<string> = ["bg-purple-100 text-purple-600", "bg-blue-100 text-blue-600", "bg-violet-100 text-violet-600"]
  const colorPalletLength: number = colorPallet.length;
  const teams = ["Product", "Engineering", "Devops"]
  return (
    <div className="p-4 border-b border-gray-200 grid grid-cols-2 md:grid-cols-12 gap-2  items-center ">
      <div className="col-span-3 flex flex-nowrap text-sm items-center gap-3 green">
        <input className="w-4 h-4" type="checkbox"  />
        <img src="https://s3-alpha-sig.figma.com/img/6ec9/4186/cc6e3e60f69ecac1443984f93e6078eb?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ftyWiNMobDO~Zxcdvbu2Fb7Yy~Dpku1h4VVfa9wq-RJvmRvRzDMZRos~rUT1JwB4QYsjdbc6zPwYlXcW9fKkFgU9SRhS5Bhnhq9yQKh5zFiMstWvuyDF-qqbAAjjG7FTP6Lx59VcBBgJROKsRAr3Ih0-2quMBCTupgFX8zGbi0Hr2oKrHYMjpOputHWMlq1Pzr4PcbkFLXqTemNwlw6x4eszaZpRHJlXUn8hUtXUpySrnVEsCS5iv-hGNhJ7ICOqcA5a7zsEWdgOj~Oh962FRkk5Bmc6iyj5HxzUAtvu7XlKD8r1NoN3PoCja36nouCMG3qDUfStZMfUSOqGtf0d5A__" className="w-10 h-10 rounded-full" />
        <div>
          <h5 className="text-sm font-medium">Olivia Rhye</h5>
          <p className="text-gray-500 ">@olivia</p>
        </div>
      </div>
      <div className={`col-span-1 max-w-max rounded-2xl px-2 pb-1 ${conditionalClass.active.background}`}>
        <div className={`inline-block mr-1.5 w-1.5 h-1.5 rounded-full ${conditionalClass.active.dot}`}></div>
        <span className={`font-medium text-xs ${conditionalClass.active.text}`}>Active</span>
      </div>
      <div className="col-span-2 text-sm text-gray-500">Product Designer</div>
      <div className="col-span-2 text-sm text-gray-500">olivia@untitledui.com</div>
      <div className="col-span-3 flex gap-2">
        {teams.slice(0, 3).map((item, index) => <span className={`rounded-2xl text-xs font-medium px-2 py-1 ${colorPallet[index % colorPalletLength]}`}>{item}</span>)}
        {teams.length >= 3 && <span className="rounded-2xl text-xs font-medium px-2 py-1 bg-gray-200">+5</span>}
      </div>
      <div className="col-span-1 flex">
        <EditIcon onClick={()=>selectItem(null,'edit')} />
        <DeleteIcon onClick={()=>selectItem(null,'delete')} />
      </div>
    </div>
  )
}
