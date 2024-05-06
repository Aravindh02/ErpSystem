import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Label
} from 'recharts';

const data = [
  {
    name: 'Clothes',
    pv: 44000,
    amt: 1400,
    value:50000,
  },
  {
    name: 'Electronics',
    pv: 55000,
    amt: 1506,
  },
  {
    name: 'Books',
    pv: 30968,
    amt: 989,
  },
  {
    name: 'FootWear',
    pv: 22600,
    amt: 1228,
  },
  {
    name: 'Home Appliances',
    pv: 49000,
    amt: 1100,
  },
  
];

const BarGraph = () => {
  return (
    <div className='mt-8'>
    <h3 className="min-w-20 text-center font-popps text-secondary font-bold ml-12 text-lg ">Top 5 Products By sales</h3>
       <div>
      <ComposedChart
        layout="vertical"
        width={500}
        height={280}
        data={data}
        margin={{
          top: 10,
          right: 25,
          bottom: 20,
          left: 40,
        }}
      >
        <XAxis type="number" dataKey="value">
        </XAxis> 
        <YAxis dataKey="name" type="category" scale="band">
        
        </YAxis> 
        <Tooltip />
       
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      </ComposedChart>
      
    </div>
    </div>
  )
}

export default BarGraph
