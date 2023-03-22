import { Checkbox } from "../utils/Checkbox";
import { TextInput } from "../utils/TextInput";
import { SYMPTOM_TAGS } from "../utils/dictionary";
import { useEffect, useState } from "react";

// checkbox 다중선택 changing Event
export const multiCheckboxChange = (curr, array, setArray) => {
  const tmp = [...array];
  const index = tmp.indexOf(curr);

  // 존재하지 않으면 추가, 존재하면 지우고
  index < 0 ? tmp.push(curr) : tmp.splice(index, 1);
  setArray(tmp);
};

export const multiCheckboxChangeAll = (curr, array, setArray, checkAll) => {
  const tmp = [...array];
  const index = tmp.indexOf(curr);
  const allIndex = tmp.indexOf(checkAll);
  if (curr === checkAll && index < 0) {
    setArray([checkAll]);
  } else {
    if (allIndex >= 0) tmp.splice(allIndex, 1);
    // 존재하지 않으면 추가, 존재하면 지우고
    index < 0 ? tmp.push(curr) : tmp.splice(index, 1);
    setArray(tmp);
  }
};

export const FilterTable = ({ values }) => {
  useEffect(() => {}, []);
  return (
    <table className="filter">
      <tbody>
        {values().map((res, resIndex) => (
          <tr key={resIndex}>
            <td>{res.key}</td>
            <td>
              <ul>
                {res.value.map((tag, index) => (
                  <li key={index}>
                    <Checkbox
                      filter
                      isChecked={res.arr.includes(tag.value)}
                      id={tag.value}
                      label={tag.label}
                      onChange={() => {
                        multiCheckboxChangeAll(
                          tag.value,
                          res.arr,
                          res.setArr,
                          res.checkAll
                        );
                      }}
                    />
                    {res.input && (
                      <TextInput
                        placeholder="처치시간"
                        readOnly={!res.arr.includes(tag.value)}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const FIRST_AID_TAGS = [
  { value: "first_aid_all", label: "안함" },
  { value: "water", label: "찬물" },
  { value: "ointment", label: "연고" },
  { value: "ice", label: "얼음" },
  { value: "iceWater", label: "얼음물" },
  { value: "band", label: "밴드" },
  { value: "remedy", label: "민간요법" },
  { value: "hospital", label: "인근병원" },
  { value: "other", label: "기타" },
];

export const OTHER_DAMAGE_TAGS = [
  { value: "other_damage_all", label: "None" },
  { value: "laceration", label: "Laceration" },
  { value: "facture", label: "Facture" },
  { value: "other", label: "Other" },
];

export const INJURY_TAGS = [
  { value: "nonWorkRelated", label: "Accident, non-work related" },
  { value: "workRelated", label: "Accident, work related" },
  { value: "recreation", label: "Accident, recreation" },
  { value: "unspecified", label: "Accident, unspecified" },
  { value: "childAbuse", label: "Suspected child abuse" },
  { value: "assaultAbuse", label: "Suspected assault/abuse" },
  { value: "selfInflicted", label: "Suspected self inflicted" },
  { value: "unknown", label: "Unknown" },
  { value: "other", label: "Other" },
];

export const CheckBox = () => {
  const [firstAid, setFirstAid] = useState([]);
  const [otherDamage, setOtherDamage] = useState([]);
  const [isInjury, setInjury] = useState([]);
  const filterValues = () => [
    {
      key: "First Aid",
      value: FIRST_AID_TAGS,
      arr: firstAid,
      setArr: setFirstAid,
      checkAll: "first_aid_all",
      input: true,
    },
    {
      key: "Other Damage",
      value: OTHER_DAMAGE_TAGS,
      arr: otherDamage,
      setArr: setOtherDamage,
      checkAll: "other_damage_all",
    },
    {
      key: "Circumstance of injury",
      value: INJURY_TAGS,
      arr: isInjury,
      setArr: setInjury,
      checkAll: "",
    },
  ];
  return <FilterTable values={filterValues} />;
};
