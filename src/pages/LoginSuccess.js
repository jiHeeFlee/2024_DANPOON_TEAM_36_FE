import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getLogin } from "../apis/Auth/getLogin";
import { userIdState } from "../state";
import { useRecoilState } from "recoil";

const LoginSuccess = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [userId, setUserId] = useRecoilState(userIdState);
  useEffect(() => {
    const id = Number(searchParams.get("userId"));
    setUserId(id);
    getLogin(id).then((res) => {
      const response = res.data;
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      response.firstLogin ? navigate("/signup") : navigate("/ongoingsummit");
    });
  }, []);
  return <div>리다이렉트 중..</div>;
};

export default LoginSuccess;
