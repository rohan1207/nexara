import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { aboutTabs } from "../constants/aboutContent";

const defaultTab = aboutTabs[0].id;
const validIds = new Set(aboutTabs.map((t) => t.id));

export function useAboutTab() {
  const location = useLocation();
  const navigate = useNavigate();
  const hashId = location.hash.replace("#", "");
  const activeTab = validIds.has(hashId) ? hashId : defaultTab;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!location.hash && location.pathname === "/about") {
      navigate(`/about#${defaultTab}`, { replace: true });
    }
  }, [location.hash, location.pathname, navigate]);

  const setActiveTab = (id) => {
    navigate(`/about#${id}`);
  };

  return { activeTab, setActiveTab, mounted };
}
