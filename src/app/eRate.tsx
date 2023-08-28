'use client'
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";
import CurrencyCellRenderer from "@/components/cellRenderer";
import TopRowComponent from "@/components/topRow";
const getRowHeight = (params: any) => {
  // Calculate row height based on the content
  // For example, you can return a fixed height or calculate based on the text length.
  // Modify this logic according to your needs.
  return 50; // Set the desired row height here
};
export default function MyGridComponent() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setRowData(data);
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchData();
  }, []);
  const gridOptions = {
    // ... other grid options
    frameworkComponents: {
      topRowComponent: TopRowComponent,
    },
  };
  const columnDefs: ColDef[] = [ // Explicitly specify the type as ColDef[]
  {  headerName: "Custom Header",
      field: "someField",
      headerComponent: TopRowComponent, // Reference the registered component
    },
    {
    headerName: 'Currency',
    valueGetter: (params: any) => params.data,
    cellRenderer: CurrencyCellRenderer, // Use the cellRenderer function
    width:150,
  },
    { 
      headerName: "We are Buying At", 
      field: "Buying_Rate",
      cellStyle: { justifyContent: 'center' 
    },
    width:150,
  },
    { headerName: "We are Selling At", field: "Selling_Rate" ,cellStyle: { justifyContent: 'center' 
  },
  width:150,},
    // Add more columns as needed
  ];
  
  
  return (
    <div className="text-center border bg-gray-50 py-8 m-2 rounded shadow-lg md:m-8" id="fxExchRt">
    <h2 className="text-xl lg:text-4xl underline font-bold mb-2">Exchange Rate</h2>
    <div className="ag-theme-balham w-full h-96 p-4 m-0" >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        getRowHeight={getRowHeight}
      />
    </div>
    </div>
  );
}
