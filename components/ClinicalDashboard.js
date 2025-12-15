
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function ClincalDashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'a421347b-32b0-4c96-a900-953ec3914da',
            embedUrl: "https://app.powerbi.com/groups/me/reports/a421347b-32b0-4c96-a900-953ec3914da0/ReportSection?experience=power-bi",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNmUyOGNjY2UtMWM5Yi00NGJlLTk4NjgtYTQxYTVmYzY1MTVmLyIsImlhdCI6MTYwNzQyOTcxMSwibmJmIjoxNjA3NDI5NzExLCJleHAiOjE2MDc0MzM2MTEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84UkFBQUF5b1E5SCs4dUVsbE1aOW5URW1wcjFzVkpLMjlRak9pV0tkdE92NHdKanZHMWdWenA2THJtUXBzcnhEMG55QnBIIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiRGVtbyIsImdpdmVuX25hbWUiOiJBbWl0IiwiaXBhZGRyIjoiMzcuMTQyLjMuNzAiLCJuYW1lIjoiQW1pdCBEZW1vIiwib2lkIjoiMWY3ZmEzZTItYmUwOC00ZTcyLTg4NzYtNjFkOTgyYzZkMjJhIiwicHVpZCI6IjEwMDMyMDAwRjQ3ODM4OTAiLCJyaCI6IjAuQVRBQXpzd29icHNjdmtTWWFLUWFYOFpSWHc4QkhJZGhYckZQZzZ5WVlRcC1rUkF3QUQ0LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlFyOVBTbjhrOFdZaV9tVUtBbzFfaVo1eFhtbnkxNFBQdGJnTlRqLU9peGMiLCJ0aWQiOiI2ZTI4Y2NjZS0xYzliLTQ0YmUtOTg2OC1hNDFhNWZjNjUxNWYiLCJ1bmlxdWVfbmFtZSI6IkFtaXREZW1vQHBiaWV3ZXN0ZXVyb3BlYnByaW1hcnkub25taWNyb3NvZnQuY29tIiwidXBuIjoiQW1pdERlbW9AcGJpZXdlc3RldXJvcGVicHJpbWFyeS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJnM2didDZuOXRFNm9oOGxKeUtVa0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.XDt2s-JtQ8jzzqSBHplCPn1BP-MsO9BA6q8KSvHgNiOY-5dDQA5VHoZmSPrVRE83S6qKWD7pljsigERzbI0Rh3l4K0V2xaaHCBIrkKvmjSlaSn1QR08lr5de5W_aRdOoWdi4U5IwtN_QtaX5Bah7TtmBr44ycHtlh3Y9dLBU0kHPMyIC2R4OVz3Sb0wKDpm-z9YxtmK_21SgGLVzeEK8qSQPtsnsof9jOqhryzicGvJwIVLjHFEZ4cTu_YiruHWClMruu5EK7knE4LBsEUv9rkaGl6BISKfBfIqtbb1XIisqvnn_kWYi0P_DcCg0Uv1a0rgJKapcTWnkgndnh7yMDg',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default ClincalDashboard;