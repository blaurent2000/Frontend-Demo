
import { LineChart } from "@mui/x-charts";



function DataGraph (props) {


  return (
    <div className="bg-neutral-900 text-center rounded p-4">
                  {/* <h1>hours_operated</h1> */}
                  <h1 className='text-xl'>{props.label}</h1>
                  <LineChart
                  grid={{ vertical: true, horizontal: true }}
                    series={[
                      { data: props.data || [],
                        area: true,
                        color: '#DB2777'
                       },
                    ]}

                    height={200}
                    xAxis={[{ data: props.date, scaleType: 'band', color: '#000000', }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    sx={{
                      //change left yAxis label styles
                     "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
                      strokeWidth:"0.4",
                      fill:"#ffffff"
                     },
                      // change bottom label styles
                      "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                          strokeWidth:"0.5",
                          fill:"#ffffff"
                       },
                        // bottomAxis Line Styles
                       "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
                        stroke:"#ffffff",
                        strokeWidth:0.4
                       },
                       // leftAxis Line Styles
                       "& .MuiChartsAxis-left .MuiChartsAxis-line":{
                        stroke:"#ffffff",
                        strokeWidth:0.4
                       }
                    }}
                  />
                </div>
  );
}

export default DataGraph;