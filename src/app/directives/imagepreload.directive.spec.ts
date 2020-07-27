import { ImagepreloadDirective } from './imagepreload.directive';

describe('ImagepreloadDirective', () => {
  it('should create an instance', () => {
    const directive = new ImagepreloadDirective();
    expect(directive).toBeTruthy();
  });

  it('should call update URL', () => {
    const directive = new ImagepreloadDirective();
    directive.default = 'TestSRC';
    directive.updateUrl();
    expect(directive.src).toEqual(directive.default);
  });

  it('should call load', () => {
    const directive = new ImagepreloadDirective();
    directive.load();
    expect(directive.className).toEqual('image-loaded');
  });



});
