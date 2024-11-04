import * as React from 'react';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import {
  KeyboardArrowDown as ArrowDownIcon,
  KeyboardArrowUp as ArrowUpIcon,
} from '@mui/icons-material';
import { BasicTextField } from '../../../inputs';

const borderBottom = '1px solid rgba(224, 224, 224, 1)';

const renderRowTitle = (
  title: string,
  isCollapsible?: boolean,
  isRowOpen?: boolean,
  setIsRowOpen?: any,
) => (
  <TableCell
    component="th"
    scope="row"
    sx={
      isCollapsible
        ? { borderBottom: isRowOpen ? borderBottom : 'initial' }
        : {}
    }
  >
    {title}
    {isCollapsible && (
      <IconButton size="small" onClick={() => setIsRowOpen(!isRowOpen)}>
        {isRowOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </IconButton>
    )}
  </TableCell>
);

const renderRowStatic = (title: string, value: string) => (
  <TableRow>
    {renderRowTitle(title)}
    <TableCell align="right">{value}</TableCell>
  </TableRow>
);

const renderRowInput = (title: string, value: string, setValue: any) => (
  <TableRow>
    {renderRowTitle(title)}
    <TableCell align="right">
      <BasicTextField value={value} setValue={setValue} />
    </TableCell>
  </TableRow>
);

const renderRowCollapsible = (
  mainTitle: string,
  mainValue: string,
  secondaryValues: Array<{ title: string; value: string; setValue: any }>,
  isRowOpen: boolean,
  setIsRowOpen: any,
) => (
  <>
    <TableRow>
      {renderRowTitle(mainTitle, true, isRowOpen, setIsRowOpen)}
      <TableCell sx={{ borderBottom: borderBottom }} align="right">
        {mainValue} €
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={isRowOpen} timeout="auto" unmountOnExit>
          <Box>
            <Table size="small">
              <TableBody>
                {secondaryValues.map((secValue) =>
                  renderRowInput(
                    secValue.title,
                    secValue.value,
                    secValue.setValue,
                  ),
                )}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  </>
);

export {
  renderRowCollapsible,
  renderRowInput,
  renderRowStatic,
  renderRowTitle,
};
