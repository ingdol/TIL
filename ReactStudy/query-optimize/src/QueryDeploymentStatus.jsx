import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchDeploymentStatus = async () => {
  const startTime = new Date().getTime(); // 호출 시작 시간 기록
  const { data } = await axios.get(
    "https://www.random.org/integers/?num=1&min=0&max=1&col=1&base=10&format=plain&rnd=new"
  );
  const endTime = new Date().getTime(); // 호출 완료 시간 기록
  const responseTime = endTime - startTime; // 응답 시간 계산

  console.log(`Tanstack Query 응답 시간: ${responseTime}ms`);
  return data;
};

const QueryDeploymentStatus = () => {
  const [shouldRefetch, setShouldRefetch] = useState(true); // 호출 중단을 위한 상태
  const { data, isFetching } = useQuery({
    queryKey: ["deploymentStatus"],
    queryFn: fetchDeploymentStatus,
    refetchInterval: shouldRefetch ? 10000 : false, // 호출 중단 시 false로 설정
    staleTime: 5000, // 5초 동안 캐시 유지
  });

  useEffect(() => {
    if (data !== undefined) {
      const statusValue = parseInt(data); // 반환된 데이터를 숫자로 변환

      if (statusValue === 0) {
        // 상태가 0이면 배포 중, 계속 호출
        toast.info("배포 상태 확인 중... (0)", {
          position: "top-right",
          autoClose: false, // 로딩바가 있는 토스트 팝업
        });
      } else if (statusValue === 1) {
        // 상태가 1이면 배포 완료, 호출 중단
        toast.success("배포가 완료되었습니다! (1)", {
          position: "top-right",
          autoClose: 5000,
        });
        setShouldRefetch(false); // API 호출 중단
      }
    }
  }, [data]);

  return (
    <div>
      <h1>Tanstack Query로 배포 상태 확인</h1>
      {isFetching ? <p>Loading...</p> : <p>상태: {data}</p>}
    </div>
  );
};

export default QueryDeploymentStatus;
