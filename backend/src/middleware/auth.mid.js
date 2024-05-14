import { verify } from 'jsonwebtoken';
import { UNAUTHORIZED } from '../constants/httpStatus.js';

export default (req, res, next) => {
  const token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2Y1YjY3YzA0MWI0MjE5ZDhjMjdiNSIsImVtYWlsIjoic2tAZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTcxNTQyODczNiwiZXhwIjoxNzE4MDIwNzM2fQ.eaENW7aq0Hcg54NXyY2SRpfQECUVS4H8-PU8zIb3E9s;
  if (!token) return res.status(UNAUTHORIZED).send();

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (error) {
    res.status(UNAUTHORIZED).send();
  }

  return next();
};
