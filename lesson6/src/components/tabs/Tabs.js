import { Tab, Tabs } from "@mui/material"



function TabsComponent({catergoriesSelect, value, setValue, valueKey='value', labelKey='label'}){

    const handleChange=(event, newValue)=>{
        setValue(newValue)
    }
    return (
        <div>
            <Tabs
                centered
                value={value}
                onChange={handleChange}
            >
                {catergoriesSelect.map((tab)=>
                    <Tab 
                        key={tab[valueKey]} 
                        value={tab[valueKey]} 
                        label={tab[labelKey]}>
                    </Tab>
                )}
            </Tabs>

        </div>
    )
}

export default TabsComponent