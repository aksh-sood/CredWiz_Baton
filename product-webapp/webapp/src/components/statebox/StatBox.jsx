import { Box, Typography, useTheme } from "@mui/material";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
 

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            display="inline"
            paddingLeft="20px"
    
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;