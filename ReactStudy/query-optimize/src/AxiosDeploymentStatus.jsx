import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AxiosDeploymentStatus = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const toastId = React.useRef(null); // 토스트 ID를 저장할 레퍼런스

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const startTime = new Date().getTime(); // 호출 시작 시간 기록
        const { data } = await axios.get(
          "https://www.random.org/integers/?num=1&min=0&max=1&col=1&base=10&format=plain&rnd=new"
        );
        const statusValue = parseInt(data); // data에서 숫자를 파싱하여 사용
        const endTime = new Date().getTime(); // 호출 완료 시간 기록
        const responseTime = endTime - startTime; // 응답 시간 계산

        console.log(`Axios 응답 시간: ${responseTime}ms`);
        setStatus(statusValue);

        if (statusValue === 0) {
          // 기존 토스트가 있는지 확인 후 새로 추가 방지
          if (!toast.isActive(toastId.current)) {
            toastId.current = toast.info("Axios) 배포 상태 확인 중... (0)", {
              position: "bottom-right",
              autoClose: false,
            });
          }
          //   toast.info("배포 상태 확인 중... (0)", {
          //     position: "bottom-right",
          //     autoClose: false, // 로딩바가 흐르는 토스트 팝업
          //   });
        } else if (statusValue === 1) {
          toast.success("Axios) 배포가 완료되었습니다! (1)", {
            position: "bottom-right",
            autoClose: 5000,
          });
          clearInterval(interval); // API 호출 중단
        }
      } catch (error) {
        console.error("API 호출 오류:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // 10초마다 호출
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
  }, []);

  return (
    <div>
      <h1>Axios로 배포 상태 확인</h1>
      {loading ? <p>Loading...</p> : <p>상태: {status}</p>}
    </div>
  );
};

export default AxiosDeploymentStatus;
