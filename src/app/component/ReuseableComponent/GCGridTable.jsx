import { GridData } from './GCAction';
import { useState, useEffect } from 'react';
import {
  //   CmpTypographyField,
  //   CmpDatePickerField,
  //   CmpSelectField,
  //   CmpInputFieldGroup,
  CmpInputField,
  //   CmpRadioField,
  //   CmpCheckboxField,
  CmpSelectArrField
  //   CmpButton
} from '../../component/ToolBox/ToolBox';
import './ReuseableComponent.css';
const GCGridEdit = ({ SrNo, item, fSave, fCancel }) => {
  const [editingObj, seteditingObj] = useState({});

  useEffect(() => {
    if (SrNo !== '') {
      seteditingObj(item);
    }
  }, [SrNo, item]);

  const onChangeInput = (event) => {
    seteditingObj((obj) => ({ ...obj, [event.target.name]: event.target.value }));
  };
  return (
    <tr>
      <td>{item.B_SrNo}</td>
      <td>{item.B_ItmCd}</td>
      <td>{item.B_ItemCd}</td>
      <td>{item.B_Qty}</td>
      <td>{item.B_Unit}</td>
      <td>{item.B_BaseQty}</td>
      <td>{item.B_UnitRate}</td>
      <td>{item.B_NetAmt}</td>
      <td>
        <CmpSelectArrField
          xLabelText="Type"
          xValue={editingObj.B_Statusl}
          xOnChange={onChangeInput}
          xName={'B_Statusl'}
          xData={[]}
          xValueMember={''}
          xDispalyMember={''}
          xError={false}
          xErrorMessage={false}
          xDisable={false}
        />
      </td>
      <td>
        <CmpSelectArrField
          xLabelText="Type"
          xValue={editingObj.B_Type}
          xOnChange={onChangeInput}
          xName={'B_Type'}
          xData={[]}
          xValueMember={''}
          xDispalyMember={''}
          xError={false}
          xErrorMessage={false}
          xDisable={false}
        />
      </td>
      <td>
        <CmpInputField
          xValue={editingObj.B_Acc_Qty}
          xType={'text'} // text/number/password
          xName={'B_Acc_Qty'}
          xReadOnly={false}
          xOnChange={onChangeInput}
          xError={false}
          xErrorMessage={''}
          xOnKeyUp={''}
        />
      </td>
      <td>
        <CmpInputField
          xValue={editingObj.B_Acc_BaseQty}
          xType={'text'} // text/number/password
          xName={'B_Acc_BaseQty'}
          xReadOnly={false}
          xOnChange={onChangeInput}
          xError={false}
          xErrorMessage={''}
          xOnKeyUp={''}
        />
      </td>

      <td>{item.B_DC_LPCost}</td>
      <td>
        <CmpInputField
          xValue={editingObj.B_Vendor}
          xType={'text'} // text/number/password
          xName={'B_Vendor'}
          xReadOnly={false}
          xOnChange={onChangeInput}
          xError={false}
          xErrorMessage={''}
          xOnKeyUp={''}
        />
      </td>
      <td>
        <CmpInputField
          xValue={editingObj.B_VendorCost}
          xType={'text'} // text/number/password
          xName={'B_VendorCost'}
          xReadOnly={false}
          xOnChange={onChangeInput}
          xError={false}
          xErrorMessage={''}
          xOnKeyUp={''}
        />
      </td>
      <td>{editingObj.B_VendorNetAmt}</td>

      {/* <td>
        <CmpInputField
          xValue={editingObj.B_Acc_Qty}
          xType={'text'} // text/number/password
          xName={'B_Acc_Qty'}
          xReadOnly={false}
          xOnChange={onChangeInput}
          xError={false}
          xErrorMessage={''}
          xOnKeyUp={''}
        />
      </td> */}

      <td>
        <span className="d-flex">
          <button
            type="button"
            className="btn btn-sm btn-primary m-1"
            onClick={(e) => {
              fCancel(e);
            }}>
            <i className="fas fa-times"></i>
          </button>
          <button
            type="button"
            className="btn btn-sm btn-danger m-1"
            onClick={(e) => {
              fSave(editingObj);
            }}>
            <i className="fas fa-save"></i>
          </button>
        </span>
      </td>
    </tr>
  );
};

const GCGridViewRow = ({ item, fEdit, fDelete }) => {
  return (
    <tr>
      <td>{item.B_SrNo}</td>
      <td>{item.B_ItmCd}</td>
      <td>{item.B_ItemCd}</td>
      <td>{item.B_Qty}</td>
      <td>{item.B_Unit}</td>
      <td>{item.B_BaseQty}</td>
      <td>{item.B_UnitRate}</td>
      <td>{item.B_NetAmt}</td>
      <td>{item.B_Statusl}</td>
      <td>{item.B_Type}</td>
      <td>{item.B_Acc_Qty}</td>
      <td>{item.B_Acc_BaseQty}</td>
      <td>{item.B_DC_LPCost}</td>
      <td>{item.B_Vendor}</td>
      <td>{item.B_VendorCost}</td>
      <td>{item.B_VendorNetAmt}</td>
      <td>
        <span className="d-flex">
          <button
            type="button"
            className="btn btn-sm btn-primary m-1"
            onClick={(e) => {
              fEdit(item);
            }}>
            <i className="fas fa-edit"></i>
          </button>
          {/* <button
            type="button"
            className="btn btn-sm btn-danger m-1"
            onClick={(e) => {
              fDelete(item);
            }}>
            <i className="fas fa-trash-alt"></i>
          </button> */}
        </span>
      </td>
    </tr>
  );
};

const GCGridTable = () => {
  const [editingRowSrNo, seteditingrowSrNo] = useState(null);
  const [data, setData] = useState(GridData);

  const fDelete = (xobj) => {
    var updatedValue = data.filter((obj) => obj.B_SrNo !== xobj.B_SrNo);
    setData(updatedValue);
  };
  const fSave = (xobj) => {
    var updatedValue = data.map((obj, i) => {
      if (xobj.B_SrNo === obj.B_SrNo) {
        return xobj;
      } else {
        return obj;
      }
    });
    setData(updatedValue);
    seteditingrowSrNo(null);
  };

  return (
    <div className="GCTABLE">
      <table className="table table-bordered mb-0">
        <thead>
          <tr className="table-dark tablehead">
            <th scope="col">Sr.No</th>
            <th scope="col">Item Code</th>
            <th scope="col">Item Name</th>
            <th scope="col">Qty</th>
            <th scope="col">Unit</th>
            <th scope="col">Base_Qty</th>
            <th scope="col">UnitRate</th>
            <th scope="col">Req.Net.Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Type</th>
            <th scope="col">Accpt.Qty</th>
            <th scope="col">Accpt.BaseQty</th>
            <th scope="col">DC.LP.Rate</th>
            <th scope="col">Vendor</th>
            <th scope="col">Vendor_Cost</th>
            <th scope="col">VendorNetAmt</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="tablerow">
          {data.map((obj, index) =>
            editingRowSrNo === obj.B_SrNo ? (
              <GCGridEdit
                key={`table_row_id_${index}`}
                item={obj}
                fSave={fSave}
                fCancel={() => seteditingrowSrNo(null)}
                SrNo={editingRowSrNo}
              />
            ) : (
              <GCGridViewRow
                key={`table_row_id_${index}`}
                item={obj}
                fEdit={(obj) => seteditingrowSrNo(obj.B_SrNo)}
                fDelete={(obj) => fDelete(obj)}
              />
            )
          )}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{'total'}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default GCGridTable;
