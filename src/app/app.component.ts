import { Component } from '@angular/core';
import "@asyncapi/web-component/lib/asyncapi-web-component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public schema:any

  public getConfig(): any {
    return (window as any).config;
  }
  public getSchemaUrl() :string{
    return (window as any).schemaUrl;
  }

  public getCssPath() :string{
    return (window as any).cssPath;
  }
}
