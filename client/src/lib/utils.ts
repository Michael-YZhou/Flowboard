export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";

export const dataGridSxStyles = (isDarkMode: boolean) => {
  const textColor = isDarkMode ? "#e5e7eb" : undefined;
  const bgColor = isDarkMode ? "#1d1f21" : "white";
  const borderColor = isDarkMode ? "#2d3135" : "#e5e7eb";
  const iconColor = isDarkMode ? "#a3a3a3" : undefined;
  const rowHoverBg = isDarkMode ? "#2d3135" : "#f5f5f5";

  return {
    "& .MuiDataGrid-mainContent": {
      color: textColor,
      backgroundColor: bgColor,
    },
    "& .MuiDataGrid-columnHeaders": {
      color: textColor,
      '& [role="row"] > *': {
        backgroundColor: bgColor,
        borderColor: borderColor,
      },
    },
    "& .MuiIconButton-root": {
      color: iconColor,
    },
    "& .MuiTablePagination-root": {
      color: iconColor,
    },
    "& .MuiTablePagination-selectIcon": {
      color: iconColor,
    },
    "& .MuiDataGrid-cell": {
      border: "none",
    },
    "& .MuiDataGrid-row": {
      borderBottom: `1px solid ${borderColor}`,

      "&:hover": {
        backgroundColor: rowHoverBg,
      },
    },
    "& .MuiDataGrid-withBorderColor": {
      borderColor: borderColor,
    },
  };
};
