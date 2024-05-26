import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "with-discount" },
        ]}
      ></Filter>
    </TableOperations>
  );
}

export default CabinTableOperation;
