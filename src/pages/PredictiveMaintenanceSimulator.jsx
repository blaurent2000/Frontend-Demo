import { useState } from "react";
import Delete from '@mui/icons-material/Delete';
import { TextField } from "@mui/material";
import equipmentData from "../assets/data/equipement_data";
import PopupSelectEquipment from "../components/PredictiveMaintenanceSimulator/PopupSelectEquipment";
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from "@mui/x-charts";
import DataGraph from "../components/PredictiveMaintenanceSimulator/DataGraph";

function PredictiveMaintenanceSimulator(props) {
  const data = equipmentData;
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [openPopupSelection, setOpenPopupSelection] = useState(false);

  return (
    <div>
      <h1 className="text-4xl text-white mb-8">Monitoring</h1>

      <div className=" flex flex-row w-full h-fit">
        <div className="mr-2">
          <p>Select equipment</p>
          {data && data.map((equipmentData, idx) => {
            const isSelected = selectedEquipment && selectedEquipment.equipment_id === equipmentData.equipment_id;

            return (
            <div key={idx} onClick={() => {setSelectedEquipment(equipmentData); setOpenPopupSelection(true)}} className={`overflow-visible mr-2 my-4 ${isSelected ? 'bg-pink-600' : 'bg-neutral-900'}  text-center rounded p-4 hover:bg-pink-600 hover:-translate-y-2 hover:translate-x-2 duration-200 ease-out`}>
              <h1 className="text-xl">{equipmentData.name}</h1>
              {/* Afficher d'autres informations si nécessaire */}
            </div>
            );
          })}
        </div>
      
          {openPopupSelection &&
            <div>

              <h1 className="text-2xl mb-2">{selectedEquipment.name} - Monitoring</h1>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">

                  <DataGraph
                    data={selectedEquipment?.historical_data.map((entry) => entry.hours_operated) || []}
                    date={selectedEquipment?.historical_data.map((entry) => entry.date)}
                    label={"Hours operated"}
                  />
                  <DataGraph
                    data={selectedEquipment?.historical_data.map((entry) => entry.temperature) || []}
                    date={selectedEquipment?.historical_data.map((entry) => entry.date)}
                    label={"Temperature"}
                  />
                  <DataGraph
                    data={selectedEquipment?.historical_data.map((entry) => entry.vibration) || []}
                    date={selectedEquipment?.historical_data.map((entry) => entry.date)}
                    label={"Vibration"}
                  />
                
                <div className="bg-neutral-900 text-center rounded p-4">
                  <h1 className="text-xl">Maintenance log</h1>
                  <div className="flex flex-col justify-between">
                    {selectedEquipment.historical_data.map((data, idx) => (
                      <li key={idx} className="flex flex-row justify-between">
                        {data.date}: {data.maintenance}
                      </li>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          // <PopupSelectEquipment 
          //   equipmentData={selectedEquipment}
          //   closeModal={setOpenPopupSelection}
          // />
          // <button className="bg-neutral-900  rounded hover:scale-110 overflow-visible ease-out mx-2 duration-300 hover:bg-pink-800">Confirm</button>
        }
        </div>
    </div>
  );
}

export default PredictiveMaintenanceSimulator;
