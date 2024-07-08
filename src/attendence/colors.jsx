export const getStatusColor = (status) => {
  switch (status) {
    case "present":
      return "bg-transparent text-xs py-1 px-4 hover:bg-green-500 text-green-700 font-normal hover:text-white border border-green-500 hover:border-transparent rounded-xl";
    case "absent":
      return "bg-transparent text-xs py-1 px-4 hover:bg-rose-500 text-rose-700 font-normal hover:text-white border border-rose-500 hover:border-transparent rounded-xl";
    case "half day":
      return "bg-transparent text-xs py-1 px-4 hover:bg-amber-500 text-amber-700 font-normal hover:text-white border border-amber-500 hover:border-transparent rounded-xl";
    case "week off":
      return "bg-transparent text-xs py-1 px-4 hover:bg-blue-500 text-blue-700 font-normal hover:text-white border border-blue-500 hover:border-transparent rounded-xl";
    case "holiday":
      return "bg-transparent text-xs py-1 px-4 hover:bg-purple-500 text-purple-700 font-normal hover:text-white border border-purple-500 hover:border-transparent rounded-xl";
    default:
      return "bg-transparent text-green-700 hover:bg-green-500 hover:text-white border-green-500";
  }
};

export const getHoverColor = (status) => {
  switch (status) {
    case "present":
      return "bg-transparent text-xs py-1 px-4 hover:bg-green-500 text-green-700 font-normal hover:text-white border border-green-500 hover:border-transparent rounded-xl";
    case "absent":
      return "bg-transparent text-xs py-1 px-4 hover:bg-rose-500 text-rose-700 font-normal hover:text-white border border-rose-500 hover:border-transparent rounded-xl";
    case "half day":
      return "bg-transparent text-xs py-1 px-4 hover:bg-amber-500 text-amber-700 font-normal hover:text-white border border-amber-500 hover:border-transparent rounded-xl";
    case "week off":
      return "bg-transparent text-xs py-1 px-4 hover:bg-blue-500 text-blue-700 font-normal hover:text-white border border-blue-500 hover:border-transparent rounded-xl";
    case "holiday":
      return "bg-transparent text-xs py-1 px-4 hover:bg-purple-500 text-purple-700 font-normal hover:text-white border border-purple-500 hover:border-transparent rounded-xl";
    default:
      return "bg-transparent text-green-700 hover:bg-green-500 hover:text-white border-green-500";
  }
};

export const getStatusColor2 = (status) => {
  switch (status) {
    case "pending":
      return "bg-transparent text-xs py-1 px-4 hover:bg-amber-500 text-amber-700 font-normal hover:text-white border border-amber-500 hover:border-transparent rounded-xl";
    case "approved":
      return "bg-transparent text-xs py-1 px-4 hover:bg-blue-500 text-blue-700 font-normal hover:text-white border border-blue-500 hover:border-transparent rounded-xl";
    case "reject":
      return "bg-transparent text-xs py-1 px-4 hover:bg-rose-500 text-rose-700 font-normal hover:text-white border border-rose-500 hover:border-transparent rounded-xl";
    default:
      return "bg-transparent text-green-700 hover:bg-green-500 hover:text-white border-green-500";
  }
};

export const getHoverColor2 = (status) => {
  switch (status) {
    case "pending":
      return "bg-transparent text-xs py-1 px-4 hover:bg-amber-500 text-amber-700 font-normal hover:text-white border border-amber-500 hover:border-transparent rounded-xl";
    case "approved":
      return "bg-transparent text-xs py-1 px-4 hover:bg-blue-500 text-blue-700 font-normal hover:text-white border border-blue-500 hover:border-transparent rounded-xl";
    case "reject":
      return "bg-transparent text-xs py-1 px-4 hover:bg-rose-500 text-rose-700 font-normal hover:text-white border border-rose-500 hover:border-transparent rounded-xl";
    default:
      return "bg-transparent text-green-700 hover:bg-green-500 hover:text-white border-green-500";
  }
};
