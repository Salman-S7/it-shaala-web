import { 
    Briefcase, 
    GraduationCap, 
    Users, 
    TrendingUp, 
    Star, 
} from 'lucide-react';


interface PlacementStats {
    icon: React.ReactNode;
    title: string;
    value: string;
    description: string;
  }

export const placementStats : PlacementStats[] = [
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: "Total Students Placed",
      value: "2000+",
      description: "Students successfully placed in top companies"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      title: "Highest Package",
      value: "₹25 LPA",
      description: "Highest annual package offered to our students"
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-600" />,
      title: "Average Package",
      value: "₹8 LPA",
      description: "Average annual package across all placements"
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Hiring Partners",
      value: "150+",
      description: "Companies actively hiring from our institute"
    }
  ];