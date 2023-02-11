import { Select } from "antd";

const Filter = (props) => {
  return (
    <div className="flex gap-3.5  p-2 " >
      
      <Select
        placeholder="Select Field"
        value={props.val.field}
        style={{ width: 140 }}
        onChange={(val) => {
          props.handleChange(props.ind, "field", val);
        }}
        options={[
          { label: "Theme",     value: "theme" },
          { label: "Sub-theme", value: "sub-theme" },
          { label: "Reason",    value: "reason" },
          { label: "Language",  value: "language" },
          { label: "Source",    value: "source" },
          { label: "Rating",    value: "rating" },
          { label: "Time Period", value: "time period" },
          { label: "Customer ID", value: "customer id" }
        ]}
      />
      <Select
        placeholder="Select Condition"
        value={props.val.condition}
        style={{ width: 150 }}
        onChange={(val) => {
          props.handleChange(props.ind, "condition", val);
        }}
        options={[
          { label: "Equals",     value: "==" },
          { label: "Does not equal", value: "!=" },
          { label: "Like",    value: "LIKE" },
          { label: "Not like",  value: "NOT LIKE" },
          { label: "Is Empty",    value: "IS EMPTY" },
          { label: "Is",    value: "IS" },
          { label: "Is not", value: "IS NOT" }
        ]}
      />
      <Select
        placeholder="Select Criteria"
        value={props.val.criteria}
        style={{ width: 150 }}
        onChange={(val) => {
          props.handleChange(props.ind, "criteria", val);
        }}
        options={[
          { value: "Offers", label: "Offers" },
          { value: "Performance", label: "Performance" },
          { value: "Platform", label: "Platform" },
          { value: "Product Feedback", label: "Product Feedback" }
        ]}
      />
      
      <button onClick={() => props.handleDelete(props.ind)} className="bg-gray-100 text-gray-500 hover:bg-gray-200 py-1 px-1 rounded inline-flex items-centerrounded inline-flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

      </button>
     
    </div>
  );
};

export default Filter;
