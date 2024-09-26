import { Breadcrumbs } from '@mui/material';
import regionPathsJson from '../../../mock_data/region_paths.json';

interface Props {
  tableRegion: string;
}

function BasicBreadcrumbs(props: Props) {
  return (
    <div role="presentation" onClick={() => {}}>
      <Breadcrumbs separator="›">
        <span>Portugal</span>
        <span>Continente </span>
        {Object.values(regionPathsJson).map(
          (region: string) =>
            region.includes(props.tableRegion) && <span>{region}</span>,
        )}
      </Breadcrumbs>
    </div>
  );
}

export default BasicBreadcrumbs;
